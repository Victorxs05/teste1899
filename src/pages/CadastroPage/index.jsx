import './style.css'
import api from '../../services/api'


export default function CadastroPage() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [estaEnviando, setEstaEnviando] = useState(false)

    function limparCamposDoFormulario() {
        setNome('')
        setEmail('')
        setSenha('')
    }

    async function envioDoFormulario(event) {
        event.preventDefault()
        setEstaEnviando(true)

        const dadosDoFormulario = { nome, email, senha}

        try {
            const resposta = await api.post('/usuarios', dadosDoFormulario)

            toast.sucess(resposta.data.mensagem)
            limparCamposDoFormulario()
        } catch {erro} {
            const mensagemDoServidor = erro?.response?.data?.mensagem
            toast.error(mensagemDoServidor)
        } finally {
            setEstaEnviando(false)
        }
    }

    return (
        <div className='cadastro-page'>
            <form onSubmit={envioDoFormulario}>
                <div className='grupo-form'>
                    <label htmlFor="campo-nome">Nome</label>
                    <input
                        id='campo-nome'
                        type='text'
                        placeholder='Ex.: Neymar Junior'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className='grupo-form'>
                    <label htmlFor="campo-email">email</label>
                    <input
                        id='campo-email'
                        type='email'
                        placeholder='Ex.: neymarjr@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='grupo-form'>
                    <label htmlFor="campo-senha">senha</label>
                    <input
                        id='campo-senha'
                        type='senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <button type='submit' disabled={estaEnviando}>
                    {estaEnviando ? 'Cadastando...' : 'Cadastrar'}

                </button>
            </form>
        </div>
        
    )
    }
