import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 relative">
            <div id="contact">
                <div className="flex flex-col w-full lg:w-[1150px] justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <div className="custom-block-subtitle text-center mb-6 pt-10">Contactanos</div>
                    <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
                        Es un placer atenderte
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                            <a
                                className="font-semibold text-customGreen2 hover:text-customGreen underline" 
                                href="mailto:ipsanasakuaipa@outlook.com"
                            >ipsanasakuaipa@outlook.com</a>
                        </div>
                        <div>
                            Calle 11 No. 8-31, Riohacha – La Guajira
                        </div>
                        <div>
                            <a
                                className="font-semibold text-customGreen2 hover:text-customGreen" 
                                href="tel:+573156471179"
                            >3156471179</a>
                        </div>
                    </div>
                    <div className="w-full pt-5">
                        <a href="https://maps.app.goo.gl/xR1NLnkav8j7eyiC8" target="_blank">
                        <img
                            src="/public/maps.png"
                            className="cursor-pointer"
                        />
                        </a>
                    </div>
                    
                </motion.div>
                </div>
            </div>
        </section>
    )
}