import { useForm, usePage } from '@inertiajs/inertia-react'
import App from '../../Layouts/App'

function Generate() {
    const { response } = usePage().props

    const { post, processing } = useForm()

    function submit(e) {
        e.preventDefault()

        post(route('generate.create'))
    }

    return (
        <App>
            <div className="my-8 mx-96">
                <div className="text-center">
                    <span className="block text-xl">
                        Generate key pair
                    </span>
                    <span className="block text-sm text-gray-500">
                        Key size is <strong>4096 bit</strong>.
                    </span>
                    <span className="block text-sm text-blue-500">
                        Note: We only generate keys. We never save them.
                    </span>
                    <span className="block text-sm text-red-500">
                        Note: Do not forget to copy and paste them somewhere.
                    </span>
                </div>
                <form onSubmit={submit}>
                    {response &&
                        <>
                            <div className="my-4">
                                <label className="block my-2">Private Key</label>
                                <textarea className="border w-full h-64 px-4 py-2 select-all" value={response.private_key} readOnly></textarea>
                            </div>
                            <div className="my-4">
                                <label className="block my-2">Public Key</label>
                                <textarea className="border w-full h-64 px-4 py-2 select-all" value={response.public_key} readOnly></textarea>
                            </div>
                        </>
                    }
                    <div className="my-4">
                        <button className="border w-full px-4 py-2 bg-blue-500 disabled:bg-gray-500 text-white" disabled={processing}>
                            {processing ? 'Generating...' : (response ? 'Regenerate' : 'Generate')}
                        </button>
                    </div>
                </form>
            </div>
        </App>
    )
}

export default Generate