import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Privacypolicycomponent() {
  return (
    <div className="relative flex h-auto w-full flex-col justify-center overflow-hidden bg-muted p-10 lg:p-20 text-gray-800 dark:text-gray-200">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary text-center md:text-start">
        Politique de Confidentialité
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-primary text-center md:text-start">
        Protection de vos données personnelles
      </h2>

      {/* Content */}
      <div className="space-y-10 text-lg leading-relaxed">
        <p>
          Chez <strong className="text-primary">ETS Global Transport</strong>, la protection de vos données personnelles est une priorité absolue. Nous nous engageons à respecter votre vie privée et à protéger les informations que vous partagez avec nous conformément aux lois et réglementations en vigueur.
        </p>
        <div className="border-b border-primary w-full"></div>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mt-6">
          Notre engagement envers la confidentialité
        </h3>
        <p>
          La transparence est au cœur de notre relation avec nos clients. Cette politique de confidentialité vise à vous informer de la manière dont nous collectons, utilisons, et protégeons vos données personnelles lorsque vous utilisez nos services ou interagissez avec nous.
        </p>
        <div className="border-b border-primary w-full"></div>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mt-6">
          Collecte et utilisation des informations personnelles
        </h3>
        <p>
          Pour vous offrir une expérience de service optimale, nous collectons uniquement les informations strictement nécessaires. Ces données incluent vos coordonnées, les informations liées à vos demandes, ainsi que toute autre donnée utile pour répondre à vos besoins spécifiques.
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Traiter vos commandes et fournir les services demandés.</li>
          <li>Améliorer nos prestations en fonction de vos préférences.</li>
          <li>Vous envoyer des mises à jour sur nos offres, services ou événements.</li>
        </ul>
        <div className="border-b border-primary w-full"></div>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mt-6">
          Sécurité et stockage des données
        </h3>
        <p>
          Nous utilisons des technologies avancées et des mesures rigoureuses pour protéger vos données contre tout accès non autorisé, perte ou divulgation. Vos informations sont stockées sur des serveurs sécurisés et accessibles uniquement aux personnes autorisées.
        </p>
        <div className="border-b border-primary w-full"></div>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mt-6">
          Vos droits et choix
        </h3>
        <p>
          Vous disposez d&apos;un contrôle total sur vos données personnelles. Vous avez le droit de :
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Accéder à vos informations pour en vérifier l&apos;exactitude.</li>
          <li>Demander la modification ou la suppression de vos données.</li>
          <li>Refuser de recevoir des communications promotionnelles.</li>
        </ul>
        <div className="border-b border-primary w-full"></div>

        <p>
          Pour exercer ces droits, vous pouvez nous contacter à tout moment via notre formulaire en ligne ou par e-mail à <strong className="text-primary">info@globaltransport-ci.com</strong>.
        </p>
        <p>
          Nous vous remercions pour la confiance que vous accordez à <strong className="text-primary">ETS Global Transport</strong>. Notre objectif est de continuer à mériter cette confiance en garantissant une gestion responsable et transparente de vos informations personnelles.
        </p>
      </div>

      {/* Background Animation */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full skew-y-12"
        )}
      />
    </div>
  );
}
