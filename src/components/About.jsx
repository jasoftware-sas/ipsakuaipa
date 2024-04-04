import { motion } from "framer-motion";

import imagen2 from "../../public/img2.png";
import imagen3 from "../../public/img3.png";

export const About = () => {
  return (
    <section
        className="w-full bg-customWhite2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
        id="about"
    >
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 pt-40">
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                    <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                        <span className="custom-block-subtitle">Sobre nosotros</span>
                        <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                            Misión
                        </h2>
                        <p className="mb-10 text-gray-600 leading-loose">Como Institución Prestadora de Servicios de Salud, nuestra misión es la de garantizar una adecuada prestación de servicios de salud acorde con las necesidades socioculturales de la población, mediante la prestación de servicios de salud de primer nivel, comprometidos con la atención humanizada, la seguridad del paciente, la satisfacción de nuestros usuarios y el mejoramiento continuo de nuestra calidad, e incorporando los avances tecnológicos apoyando en el talento humano para el logro de nuestros objetivos y metas en procura del mejoramiento de la calidad de vida de nuestra población.</p>
                    </div>
                </div>
                <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
                    <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
                        <div className="mb-4 py-3 pl-3 pr-2 rounded">
                            <img
                            src={imagen2}
                            alt="Vista de la sala de espera"
                            className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 pt-40">
                <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
                    <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
                        <div className="mb-4 py-3 pl-3 pr-2 rounded">
                            <img
                            src={imagen3}
                            alt="Vista de la sala de espera"
                            className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                    <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                        <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">Visión</h2>
                        <p className="mb-10 text-gray-600 leading-loose">Para el año 2025 la IPS FUNDACIÓN ANAS AKUAIPA, será una institución auto sostenible, líder en la prestación de servicios de primer nivel de complejidad, reconocida por su atención humanizada, segura y centrada en el usuario, brindando la cobertura, equidad y accesibilidad a toda la población.</p>
                        <p className="mb-5 text-gray-600 leading-loose">Comprometida con resolver en forma eficiente y eficaz las necesidades en la prestación de los servicios de salud en nuestras comunidades respetando los usos y costumbres de nuestros pueblos, contribuyendo al fortalecimiento de un sistema de atención propio adecuado a las características socioculturales de la población objeto del servicio.</p>
                    </div>
                </div>
            </div>
      </motion.div>
    </section>
  )
}
