const responsive = {
    desktop_lg: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 900, min: 768 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet2: {
      breakpoint: { max: 768, min: 600 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
}

export default responsive;