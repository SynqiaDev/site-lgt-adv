import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Costa",
    context: "Empreendedora",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=180&q=80",
    text: "Fui atendida com rapidez e transparencia. Em poucos dias ja tinha clareza total do meu processo e dos proximos passos.",
  },
  {
    name: "Rodrigo Alves",
    context: "Autonomo",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=180&q=80",
    text: "Equipe muito acessivel e objetiva. Senti seguranca desde o primeiro contato e conseguimos avancar com estrategia.",
  },
  {
    name: "Patricia Souza",
    context: "Servidora publica",
    rating: 4,
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=180&q=80",
    text: "Profissionais atenciosos e didaticos. Explicaram tudo sem juridiquês e conduziram meu caso com seriedade.",
  },
];

export default function BioTestimonials() {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-heading font-semibold text-text-primary">
        Quem ja confiou
      </h3>

      <div className="space-y-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-border-default bg-bg-card p-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src={item.photo}
                  alt={`Foto de ${item.name}`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-text-primary">
                  {item.name}
                </p>
                <p className="text-xs font-body text-text-muted">{item.context}</p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-0.5" aria-label={`Nota ${item.rating} de 5`}>
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className={`h-3.5 w-3.5 ${
                    index < item.rating
                      ? "fill-primary text-primary"
                      : "text-border-default"
                  }`}
                  aria-hidden
                />
              ))}
            </div>

            <p className="mt-2 text-sm font-body leading-relaxed text-text-secondary">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
