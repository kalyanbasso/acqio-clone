import Image from "next/image";

const HeaderText = ({ value }: { value: string }) => {
  return (
    <div className="text-xs text-teal-500 hover:text-teal-700 hover:cursor-pointer ">
      {value}
    </div>
  );
};

const MainHeaderText = ({ value, bold }: { value: string; bold?: boolean }) => {
  return (
    <div
      className={`text-xs ${
        bold ? "font-bold" : ""
      } text-gray-500 hover:text-gray-700 hover:cursor-pointer`}
    >
      {value}
    </div>
  );
};

export function Header() {
  return (
    <div>
      <div className="bg-amber-300 flex flex-row p-3 gap-2 justify-end items-center">
        <HeaderText value="PORTAL DO CLIENTE" />
        <HeaderText value="PROTEÇÃO DE DADOS" />
        <HeaderText value="icons" />
      </div>
      <div className="flex flex-row px-3 py-2 justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <Image src="/acqio.svg" alt="Acqio" width={90} height={90}></Image>
          <MainHeaderText value="SOBRE A ACQIO" />
          <MainHeaderText value="PAGAMENTOS" />
          <MainHeaderText value="ACQIO ONLINE" />
          <MainHeaderText value="FRANQUIAS" />
          <MainHeaderText value="BLOG" />
          <MainHeaderText value="FALECONOSCO" bold />
        </div>
        <div className="items-center">
            <button className="text-xs p-2 text-white border-teal-700 bg-teal-500 hover:bg-teal-700 rounded-2xl">SEJA FRANQUEADO</button>
        </div>
      </div>
      <div className="w-full h-px bg-gray-300">

      </div>
    </div>
  );
}
