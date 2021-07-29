<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Spatie\Crypto\Rsa\PrivateKey;

class SignController extends Controller
{
    public function index()
    {
        return inertia('Sign');
    }

    public function create(Request $request)
    {
        $request->validate([
            'private_key' => 'required',
            'text_to_sign' => 'required'
        ]);

        try {
            $private_key = PrivateKey::fromString($request->private_key);
        } catch (\Exception $e) {
            throw ValidationException::withMessages([
                'private_key' => [$e->getMessage()],
            ]);
        }

        $signature = $private_key->sign($request->text_to_sign);

        return inertia('Sign', [
            'response' => [
                'signature' => $signature
            ]
        ]);
    }
}
