import { useForm, usePage } from '@inertiajs/inertia-react'
import App from '../../Layouts/App'

function Verify() {
    const { response } = usePage().props

    const { data, setData, post, processing, errors } = useForm({
        public_key: '',
        text_to_verify: '',
        signature: '',
    });

    function submit(e) {
        e.preventDefault()

        post(route('verify.create'))
    }

    return (
        <App>
            <div className="my-8 mx-96">
                <div className="text-center">
                    <span className="block text-xl">
                        Verify text with public key and signature.
                    </span>
                </div>
                {response &&
                    <div className="my-4">
                        {response.verified &&
                            <div className="border border-green-600 bg-green-300 px-4 py-2">
                                Wow! Combination is valid.
                            </div>
                        }
                        {!response.verified &&
                            <div className="border border-red-600 bg-red-300 px-4 py-2">
                                Meh. Combination is invalid.
                            </div>
                        }
                    </div>
                }
                <form onSubmit={submit}>
                    <div className="my-4">
                        <label className="block my-2">Public Key</label>
                        <textarea className="border w-full h-64 px-4 py-2 select-all" value={data.public_key} onChange={e => setData('public_key', e.target.value)}></textarea>
                        {errors.public_key && <span className="block text-red-500">{errors.public_key}</span>}
                    </div>
                    <div className="my-4">
                        <label className="block my-2">Text to verify</label>
                        <textarea className="border w-full h-64 px-4 py-2 select-all" value={data.text_to_verify} onChange={e => setData('text_to_verify', e.target.value)}></textarea>
                        {errors.text_to_verify && <span className="block text-red-500">{errors.text_to_verify}</span>}
                    </div>
                    <div className="my-4">
                        <label className="block my-2">Signature</label>
                        <textarea className="border w-full h-64 px-4 py-2 select-all" value={data.signature} onChange={e => setData('signature', e.target.value)}></textarea>
                        {errors.signature && <span className="block text-red-500">{errors.signature}</span>}
                    </div>
                    <div className="my-4">
                        <button className="border w-full px-4 py-2 bg-blue-500 disabled:bg-gray-500 text-white" disabled={processing}>
                            {processing ? 'Verifying...' : (response ? 'Re-verify' : 'Verify')}
                        </button>
                    </div>
                </form>
            </div>
        </App>
    )
}

export default Verify