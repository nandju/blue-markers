

export default function Header1(){
    return(
        <div className="relative flex items-center justify-between w-full h-[calc(100vh-100px)]">
  <img
    className="absolute inset-0 w-full h-full object-cover shrink-0"
    src="https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="herosection"
  />
  <div className="absolute w-full h-full bg-black/25"></div>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-4xl md:text-6xl font-semibold space-y-6 p-8 m-4">
    {/* Texte principal */}
    <p>Contactez-nous</p>
  </div>
  {/* Bouton gauche */}
  <div className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-black bg-white/90 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
    {"<"}
  </div>
  {/* Bouton droit */}
  <div className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-black bg-white/90 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
    {">"}
  </div>
</div>
    )
}