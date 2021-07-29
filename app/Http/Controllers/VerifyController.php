<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Spatie\Crypto\Rsa\PublicKey;

class VerifyController extends Controller
{
    public function index()
    {
        return inertia('Verify');
    }

    public function create(Request $request)
    {
        $request->validate([
            'public_key' => 'required',
            'text_to_verify' => 'required',
            'signature' => 'required'
        ]);

        try {
            $public_key = PublicKey::fromString($request->public_key);
        } catch(\Exception $e) {
            throw ValidationException::withMessages([
                'public_key' => [$e->getMessage()],
            ]);
        }
        
        $verified = $public_key->verify($request->text_to_verify, $request->signature);

        return inertia('Verify', [
            'response' => [
                'verified' => $verified
            ]
        ]);
    }
}
