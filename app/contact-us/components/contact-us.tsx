import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@nextui-org/react";

export default function ContactUsComponent() {
    return (
        <div className="w-full px-20 py-8 bg-muted">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Partie gauche - Informations de contact */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Entrer en contact</h2>
                    <p className="mb-8">
                        Retrouvez-nous à Yopougon Maroc, Carrefour OBAMA pour discuter de vos besoins en transport et travaux publics.
                    </p>

                    <div className="space-y-6">
                        {/* Adresse */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-10 md:w-10 md:h-10 bg-primary border-2 border-primary rounded-full flex items-center justify-center">
                                <MapPin size={16} color="white" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p>Yopougon Maroc, Carrefour OBAMA</p>
                            </div>
                        </div>

                        {/* Téléphone */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-10 md:w-10 md:h-10 bg-primary border-2 border-primary rounded-full flex items-center justify-center">
                                <Phone size={16} color="white" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone Number</h3>
                                <p>(+225) 27 23 43 70 06 / (+225) 05 06 17 18 19</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-10 md:w-10 md:h-10 bg-primary border-2 border-primary rounded-full flex items-center justify-center">
                                <Mail size={16} color="white" />
                            </div>
                            <div>
                                <h3 className="font-semibold">E-Mail</h3>
                                <p>info@globaltransport-ci.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Réseaux Sociaux */}
                    <div className="border-b border-black/60 w-full my-8"></div>

                    <div className="mt-8">
                        <p className="font-semibold mb-4">Follow Us:</p>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 border-2 border-primary bg-primary rounded-full flex items-center justify-center">
                                <Facebook size={16} color="white" />
                            </div>
                            <div className="w-8 h-8 border-2 border-primary bg-primary rounded-full flex items-center justify-center">
                                <Twitter size={16} color="white" />
                            </div>
                            <div className="w-8 h-8 border-2 border-primary bg-primary rounded-full flex items-center justify-center">
                                <Linkedin size={16} color="white" />
                            </div>
                            <div className="w-8 h-8 border-2 border-primary bg-primary rounded-full flex items-center justify-center">
                                <Instagram size={16} color="white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partie droite - Formulaire */}
                <div className="flex-1 bg-muted rounded-3xl p-8 shadow-lg text-end">
                    <h2 className="text-2xl font-bold mb-6 text-start">Envoyer un message</h2>
                    <form className="space-y-6" method="get" action="">
                        <div>
                            <input
                                type="text"
                                placeholder="Nom"
                                className="w-full p-3 border-b-2 border-gray-200 focus:border-black outline-none"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="l'adresse e-mail"
                                className="w-full p-3 border-b-2 border-gray-200 focus:border-black outline-none"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full p-3 border-b-2 border-gray-200 focus:border-black outline-none"
                                required
                            />
                        </div>
                        <p className="text-sm text-gray-500 text-start">
                            En soumettant, vous acceptez le traitement de vos données personnelles par nous conformément à l&apos;énoncé de confidentialité.
                        </p>
                        <Button
                            type="submit"
                            color="primary"
                            variant="shadow"
                        >
                            Envoyer
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
