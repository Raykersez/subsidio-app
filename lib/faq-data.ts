export type Faq = {
  id: string
  question: string
  answer: string
  keywords: string[]
}

export const faqs: Faq[] = [
  {
    id: "registro",
    question: "¿Cómo registrarme?",
    answer:
      "Para registrarte, ingresa a la sección de registro con tu documento de identidad (DNI o carné de extranjería). Completa tus datos personales, verifica tu número de teléfono con el código que recibirás por SMS y crea una contraseña segura. El registro es gratuito y toma menos de 5 minutos.",
    keywords: ["registrarme", "registro", "registrar", "crear", "cuenta", "inscribirme", "afiliarme", "empezar"],
  },
  {
    id: "elegibilidad",
    question: "¿Cómo saber si pertenezco al programa?",
    answer:
      "Puedes verificar tu elegibilidad ingresando tu número de documento en la sección 'Consultar mi estado'. El sistema revisa automáticamente el padrón oficial de beneficiarios según tu clasificación socioeconómica. Si perteneces al programa, verás tu estado como 'Beneficiario activo'.",
    keywords: ["pertenezco", "programa", "elegible", "beneficiario", "califico", "padron", "estado", "saber"],
  },
  {
    id: "uso-app",
    question: "¿Cómo usar la aplicación?",
    answer:
      "Una vez registrado, desde el panel principal podrás consultar el estado de tu subsidio, revisar el historial de pagos, actualizar tus datos y encontrar los puntos de cobro más cercanos. La aplicación está disponible las 24 horas y funciona en celulares, tablets y computadoras.",
    keywords: ["usar", "aplicacion", "app", "funciona", "navegar", "utilizar", "manejar"],
  },
  {
    id: "tarjeta",
    question: "¿Cómo registrar mi tarjeta de subsidio?",
    answer:
      "Para registrar tu tarjeta, ve a 'Mis medios de cobro' y selecciona 'Agregar tarjeta'. Ingresa el número de 16 dígitos que aparece en tu tarjeta de subsidio y confirma con tu documento de identidad. Una vez validada, podrás usarla para recibir tus depósitos y realizar cobros.",
    keywords: ["tarjeta", "registrar tarjeta", "cobro", "medio de pago", "activar tarjeta", "vincular"],
  },
  {
    id: "monto",
    question: "¿Cuánto es el monto del subsidio y cada cuánto se paga?",
    answer:
      "El monto del subsidio depende de tu clasificación en el programa y de la composición de tu hogar. Los depósitos se realizan de forma periódica, generalmente cada dos meses. Puedes ver el monto exacto y la fecha del próximo pago en la sección 'Mis pagos'.",
    keywords: ["monto", "cuanto", "dinero", "pago", "cuando", "deposito", "frecuencia", "cobrar"],
  },
  {
    id: "cobro",
    question: "¿Dónde y cómo puedo cobrar mi subsidio?",
    answer:
      "Puedes cobrar tu subsidio en agentes autorizados, cajeros de la red del programa o mediante retiro sin tarjeta usando un código temporal generado en la aplicación. En la sección 'Puntos de cobro' encontrarás un mapa con los lugares habilitados más cercanos a tu ubicación.",
    keywords: ["donde", "cobrar", "retirar", "agente", "cajero", "puntos", "efectivo", "sacar dinero"],
  },
  {
    id: "datos",
    question: "¿Cómo actualizo mis datos personales o de contacto?",
    answer:
      "Ingresa a 'Mi perfil' para actualizar tu dirección, número de teléfono o correo electrónico. Mantener tus datos al día es importante para que recibas notificaciones sobre tus pagos y cualquier novedad del programa. Algunos cambios pueden requerir una verificación adicional.",
    keywords: ["actualizar", "datos", "cambiar", "perfil", "direccion", "telefono", "correo", "modificar"],
  },
  {
    id: "problemas",
    question: "No recibí mi pago, ¿qué debo hacer?",
    answer:
      "Si no recibiste un pago que esperabas, primero verifica en 'Mis pagos' que tu estado siga activo y que tus medios de cobro estén registrados correctamente. Si todo está en orden pero el pago no aparece, comunícate con el centro de atención desde la sección de contacto para que revisemos tu caso.",
    keywords: ["no recibi", "problema", "error", "no llego", "reclamo", "ayuda", "pago pendiente", "falla"],
  },
]
