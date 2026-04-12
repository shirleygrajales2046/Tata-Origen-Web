interface Props {
  name: string
  description: string
  message: string
  image?: string
}

function ProductCard({ name, description, message, image }: Props) {
  return (
    <div className="product-card" data-aos="fade-up">

      {image && <img src={image} alt={name} />}

      <h3>{name}</h3>

      <p>{description}</p>

      <button
        onClick={() =>
          window.open(
            `https://wa.me/573004108922?text=${encodeURIComponent(message)}`,
            "_blank"
          )
        }
      >
        Pedir por WhatsApp
      </button>

    </div>
  )
}

export default ProductCard