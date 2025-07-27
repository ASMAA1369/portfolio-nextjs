import Image from "next/image";

const projets = [
  { id: 1, title: "Projet 1 : Application Web", img: "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg" },
  { id: 2, title: "Projet 2 : Application Mobile", img: "https://img.freepik.com/photos-gratuite/smartphone-concept-interface-utilisateur_52683-104212.jpg?t=st=1753617205~exp=1753620805~hmac=967eed81747b5657d3687f836a8fa8c590ec7e12ac553f56d4885572be114bea&w=1480" },
  { id: 3, title: "Projet 3 : Dashboard", img: "https://img.freepik.com/vecteurs-libre/modele-tableau-bord-administration-design-plat_23-2147869112.jpg?t=st=1753617604~exp=1753621204~hmac=38a39dd71b9ded4dae09e4fe3eef57e08797bed92d6d3b801bf7fb02e0c49937&w=1480" },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Mes Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projets.map(({ id, title, img }) => (
          <div
            key={id}
            className="border rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4 text-center bg-white"
          >
            <Image
              src={img}
              alt={title}
              width={400}
              height={250}
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
