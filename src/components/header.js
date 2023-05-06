import Li from "./li/li";

export default function Header() {
  return (
    <>
      <header>
        <ul className="flex p-4 gap-8 text-primary text-sm ">
          <Li>Início</Li>
          <Li>Blog</Li>
          <Li>Iniciativas</Li>
          <Li>Vídeos</Li>
          <Li>Vagas</Li>
        </ul>
      </header>
    </>
  );
}
