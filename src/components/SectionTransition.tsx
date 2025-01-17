import { useInView } from "react-intersection-observer";

interface SectionProps {
  children: React.ReactNode;
}

export const SectionTransition: React.FC<SectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    // o quanto da seção precisa estar visível para ativar o efeito (10%)
    threshold: 0.1,
    // executa a animação uma única vez, se caso o elemento anterior estiver valido.
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};
