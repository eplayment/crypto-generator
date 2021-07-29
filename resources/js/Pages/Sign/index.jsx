import { useForm, usePage } from '@inertiajs/inertia-react'
import App from '../../Layouts/App'

function Sign() {
    const { response } = usePage().props

    const { data, setData, post, processing, errors } = useForm({
        private_key: '',
        text_to_encrypt: '',
    });

    function submit(e) {
        e.preventDefault()

        post(route('sign.create'))
    }

    return (
        <App>
            <div className="my-8 mx-96">
                <div className="text-center">
                    <span className="block text-xl">
                        Sign text with private key.
                    </span>
                    <span className="block text-sm text-gray-500">
                        Text is signed using <strong>SHA256withRSA</strong> algorithm.
                    </span>
                </div>
                <form onSubmit={submit}>
                    <div className="my-4">
                        <label className="block my-2">Private Key</label>
                        <textarea className="border w-full h-64 px-4 py-2 select-all" value={data.private_key} onChange={e => setData('private_key', e.target.value)}></textarea>
                        {errors.private_key && <span className="block text-red-500">{errors.private_key}</span>}
                    </div>
                    <div className="my-4">
                        <label className="block my-2">Text to Sign</label>
                        <textarea className="border w-full h-64 px-4 py-2 select-all" value={data.text_to_sign} onChange={e => setData('text_to_sign', e.target.value)}></textarea>
                        {errors.text_to_sign && <span className="block text-red-500">{errors.text_to_sign}</span>}
                    </div>
                    {response &&
                        <div className="my-4">
                            <label className="block my-2">Signature</label>
                            <textarea className="border w-full h-64 px-4 py-2 select-all" value={response.signature}></textarea>
                        </div>
                    }
                    <div className="my-4">
                        <button className="border w-full px-4 py-2 bg-blue-500 disabled:bg-gray-500 text-white" disabled={processing}>
                            {processing ? 'Signing...' : (response ? 'Re-sign' : 'Sign')}
                        </button>
                    </div>
                </form>
            </div>
        </App>
    )
}

export default Sign