export const Footer = () => {
  return (
    <footer className="flex items-center mt-10 font-inter min-h-36 gap-5 bg-slate-200 border-t border-slate-400">
      <div className="flex items-center gap-2 mx-5 my-5">
        <img className="w-12" src="/logo.svg" alt="Logo de Taskify" />
        <h1 className="text-3xl font-bold italic">Taskify</h1>
      </div>

      <ul>
        <h1 className="text-sm font-black italic">FOLLOW US</h1>
        <li className="font-bold text-sm text-slate-600">
          <a href="https://github.com/danielquirozc/Taskify" target="_blank">Github</a>
          </li>
        <li className="font-bold text-sm text-slate-600">PortFolio</li>
      </ul>
      <ul>
        <h1 className="text-sm font-black italic">LEGAL</h1>
        <li className="font-bold text-sm text-slate-600">Terms and Conditions</li>
        <li className="font-bold text-sm text-slate-600">Privacy Policy</li>
      </ul>
    </footer>
  )
}
