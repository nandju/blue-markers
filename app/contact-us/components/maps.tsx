export default function Maps() {
    return (
        <div className="w-full h-[400px] relative overflow-hidden bg-gray-100/80">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1696139976394!2d-73.44661242371837!3d45.52766762107095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b11a3c7b7bd%3A0x4cde19839de451d7!2stechnique.com%20London%20Eye!5e0!3m2!1sfr!2sca!4v1709858433407!5m2!1sfr!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
            />
        </div>
    )
}
