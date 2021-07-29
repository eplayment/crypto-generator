import { InertiaLink } from '@inertiajs/inertia-react'
import App from '../../Layouts/App'

function Home() {
    return (
        <App>
            <div className="my-8 mx-96">
                <div className="flex flex-col gap-4">
                    <InertiaLink className="border w-full px-4 py-2 bg-blue-500 disabled:bg-gray-500 text-white" href={route('generate')}>
                        RSA Key Pair Generator (4096 bit key size)
                    </InertiaLink>
                    <InertiaLink className="border w-full px-4 py-2 bg-blue-500 disabled:bg-gray-500 text-white" href={route('sign')}>
                        RSA Sign (signed using SHA256withRSA algorithm)
                    </InertiaLink>
                    <InertiaLink className="border w-full px-4 py-2 bg-blue-500 disabled:bg-gray-500 text-white" href={route('verify')}>
                        RSA Verify
                    </InertiaLink>
                </div>
            </div>
        </App>
    )
}

export default Home