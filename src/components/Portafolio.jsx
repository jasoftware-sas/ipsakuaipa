import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Portafolio = () => {
    return (
    <section 
        className="w-full bg-customWhite mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
        id="portafolio"
    >
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
            {/* <h2 className="text-center text-4xl lg:text-5xl custom-section-big-title pt-10">Portafolio</h2> */}
            <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
                <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
                    <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
                        <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
                            <img
                                src="/public/img4.jpg"
                                alt="f1"
                                className="rounded-xl  custom-border-gray"
                        />
                        </div>
                        <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
                            <img
                                src="/public/img5.jpg"
                                alt="f2"
                                className="rounded-xl  custom-border-gray"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
                    <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                        <span className="custom-block-subtitle">Portafolio</span>
                        <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                        Contamos con servicios de baja complejidad
                        </h2>
                        <p className="mb-12 text-gray-500 leading-loose">El presente portafolio define los servicios prestados en la IPS, damos así a conocer cada uno de los servicios habilitados con nuestra capacidad resolutivita, disponibilidad de recursos físicos y administrativos, con el mejor equipo médico humano para satisfacer las necesidades de la población que demanda, los servicios de la región de manera objetiva e integral.</p>
                        <ul className="mb-6 text-gray-500">
                            <li className="mb-4 flex">
                                <CheckArrowIcon /><span>Medicina General</span>
                            </li>
                            <li className="mb-4 flex">
                                <CheckArrowIcon /><span>Odontología General</span>
                            </li>
                            <li className="mb-4 flex">
                                <CheckArrowIcon /><span>Enfermería</span>
                            </li>
                            <li className="mb-4 flex">
                                <CheckArrowIcon /><span>Tamizaje de Cuello Uterino</span>
                            </li>
                            <li className="mb-4 flex">
                                <CheckArrowIcon /><span>Ruta Integral de Atención Promoción y Mantenimiento de la Salud</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
    )
}