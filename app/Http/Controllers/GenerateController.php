<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Crypto\Rsa\KeyPair;

class GenerateController extends Controller
{
    public function index()
    {
        return inertia('Generate');
    }

    public function create()
    {
        [$privateKey, $publicKey] = (new KeyPair())->generate();

        return inertia('Generate', [
            'response' => [
                'private_key' => $privateKey,
                'public_key' => $publicKey
            ]
        ]);
    }
}
