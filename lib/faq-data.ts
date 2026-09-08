export type Faq = {
  id: string
  question: string
  answer: string
  keywords: string[]
}

export const faqs: Faq[] = [
  {
    id: "que-es",
    question: "¿Qué es Subsidio App y a quién está dirigido?",
    answer:
      "Subsidio App es un programa de subsidio focalizado con tarjeta y billetera digital cerrada, dirigido a las familias de nivel socioeconómico D y E que viven en la periferia de Lima. Busca reducir el gasto desproporcionado en transporte y servicios básicos, devolviendo horas de vida y tranquilidad a los hogares vulnerables.",
    keywords: ["que es", "programa", "subsidio", "dirigido", "quien", "familias", "d y e", "nivel socioeconomico"],
  },
  {
    id: "elegibilidad",
    question: "¿Cómo saber si pertenezco al programa?",
    answer:
      "Puedes verificar tu elegibilidad acercándote a un comedor o espacio de apoyo vecinal habilitado, donde se valida tu situación según el padrón oficial y tu clasificación socioeconómica. El sistema prioriza a las familias de NSE D y E en zonas vulnerables. Si calificas, te registran como beneficiario activo.",
    keywords: ["pertenezco", "programa", "elegible", "beneficiario", "califico", "padron", "estado", "saber"],
  },
  {
    id: "registro",
    question: "¿Cómo me registro en el programa?",
    answer:
      "El registro se realiza de forma presencial en los centros físicos del barrio (comedores y espacios de apoyo vecinal) para que sea accesible a todos, sin depender de trámites digitales complicados. Solo necesitas tu documento de identidad y validar tus datos. Es gratuito y el personal te acompaña en el proceso.",
    keywords: ["registrarme", "registro", "registrar", "inscribirme", "afiliarme", "empezar", "comedor", "presencial"],
  },
  {
    id: "tarjeta",
    question: "¿Cómo funciona la tarjeta y la billetera digital?",
    answer:
      "Tu tarjeta está vinculada a una billetera digital cerrada: el saldo del subsidio solo puede usarse en los servicios habilitados, como transporte y servicios básicos. Esto garantiza que la ayuda se destine a su propósito. Cada consumo se descuenta al instante y queda registrado en tu historial.",
    keywords: ["tarjeta", "billetera", "digital", "cerrada", "saldo", "como funciona", "wallet", "cobro"],
  },
  {
    id: "transporte",
    question: "¿Qué transportes y servicios puedo subsidiar?",
    answer:
      "Puedes usar el subsidio en pasajes de combi, corredores complementarios, Metropolitano, tren eléctrico y aplicativos de viaje. También cubre servicios básicos como agua y luz, y compras en aliados como bodegas, minimarkets y supermercados de la red.",
    keywords: ["transporte", "combi", "metropolitano", "tren", "corredores", "servicios", "agua", "luz", "pasajes"],
  },
  {
    id: "recarga",
    question: "¿Dónde puedo recargar o consultar mi saldo?",
    answer:
      "Puedes consultar tu saldo y movimientos en los centros de validación del barrio y en los puntos aliados de la red. Los depósitos del subsidio se cargan de forma periódica y automática a tu billetera, sin que tengas que hacer trámites adicionales.",
    keywords: ["recargar", "saldo", "consultar", "movimientos", "puntos", "aliados", "deposito", "donde"],
  },
  {
    id: "transparencia",
    question: "¿Cómo se garantiza que el subsidio sea transparente?",
    answer:
      "Todo el sistema es auditable: cada depósito y cada consumo queda registrado y puede ser revisado. La billetera cerrada evita el mal uso de los fondos y el historial de transacciones da trazabilidad completa, generando confianza tanto para las familias como para las autoridades.",
    keywords: ["transparente", "transparencia", "auditar", "confianza", "registrado", "trazabilidad", "control"],
  },
  {
    id: "historial",
    question: "¿Mi historial me sirve para créditos o el título de propiedad?",
    answer:
      "Sí. A medida que usas tu billetera de forma responsable, construyes un historial de transacciones que genera confianza en el ecosistema. A futuro, ese historial puede ayudarte a acceder a créditos o a avanzar en la formalización del título de propiedad de tu lote.",
    keywords: ["historial", "credito", "creditos", "titulo", "propiedad", "formalizar", "beneficios", "futuro"],
  },
]
