import './App.css'

function Welcomepage() {
return (
<main className="">
<section className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center flex flex-col items-center">
<h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Bem-vindo ao painel</h1>
<p className="text-gray-500 text-sm md:text-base mb-6">Gerencie seus produtos em um só
lugar.</p>
<button className= "w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm">Entrar no sistema</button>
</section>
</main>
)
}
export default Welcomepage