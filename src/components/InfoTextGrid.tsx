import Image from "next/image";

const Item = ({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}) => (
  <div className="flex flex-col items-center w-1/3">
    <Image
      src={src}
      alt={alt}
      width={100}
      height={100}
      className="object-cover"
    />
    <p className="text-gray-700 text-center">{text}</p>
  </div>
);

export function InfoTextGrid() {
  return (
    <div className="flex items-center mt-6 h-screen flex-col">
      <div className="flex w-full justify-center">
        <div className="max-w-md flex flex-col items-center">
          <Image src="/download.svg" alt="Acqio" width={30} height={30}></Image>
          <p className="text-2xl text-teal-500">
            Muito mais que uma maquininha
          </p>
          <p className="text-gray-700 text-center ">
            Oferecemos a melhor solução de pagamento para o seu negócio, com
            atendimento presencial por meio dos nossos franqueados
          </p>
        </div>
      </div>
      <div className="flex mt-6 w-full max-w-3xl items-center flex-col gap-6">
        <div className="flex flex-row gap-6">
          <Item
            src="/icon-calendario3.gif"
            alt="Acqio"
            text="Temos soluções financeiras para todos os tamanhos de empresas"
          />
          <Item
            src="/icon-12x-2.gif"
            alt="Acqio"
            text="Venda mais com a nossa maquininha parcelando em até 12 vezes"
          />
          <Item
            src="/recebimentos-ot0402.gif"
            alt="Acqio"
            text="Tenha total controle em tempo real dos seus recebimentos"
          />
        </div>
        <div className="flex flex-row gap-6">
          <Item
            src="/troca_maquina-ot0402.gif"
            alt="Acqio"
            text="Reposição imediata da máquina em caso de defeito"
          />
          <Item
            src="/atendimentos-ot0402.gif"
            alt="Acqio"
            text="Atendimento presencial e consultivo"
          />
          <Item
            src="/sem_limite-ot0402.gif"
            alt="Acqio"
            text="Descomplique sua vida e realize transferências sem valor mínimo"
          />
        </div>
      </div>
    </div>
  );
}
