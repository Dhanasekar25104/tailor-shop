import "./Home.css"
import Aos from "aos" 
import "aos/dist/aos.css";
export default function Home(){
    Aos.init();
    return(
        <div className="home">
        <div className="homebg">
            <h1>Where Fashion Finds Its Perfect Fit</h1>
            <img src="./images/wave.png" alt="wave-img"></img>
        </div>
        <div className="about-us">
        <img src="./images/needles.png" alt="needles" className="design-icon ico-1"></img>
        <img src="./images/buttons.png" alt="buttons" className="design-icon ico-2"></img>
        <img src="./images/scissor.png" alt="scissor" className="design-icon ico-3"></img>
        <img src="./images/thread.png" alt="thread" className="design-icon ico-4"></img>

        <h1>About Us</h1>
        <div className="about-detail">
            <img src="./images/measure.jpg" alt="about-img" data-aos="fade-down" data-aos-duration="1000"></img>
        <p data-aos="fade-up" data-aos-duration="1200">
        Welcome to Tailor-trends, where fashion meets artistry with decades of working experience. Our premier tailor shop is dedicated to crafting impeccable garments that elevate your style and embrace your individuality. With a team of skilled tailors boasting years of expertise, we combine tradition and innovation to tailor each piece to perfection, ensuring a flawless fit that complements your unique physique. Over the years, we have honed our craft, delivering exceptional results for our clients. From bespoke suits and elegant dresses to unforgettable wedding attire, our creations are meticulously crafted using only the finest fabrics and materials. Embrace the journey of sartorial elegance and let us be your trusted partner in shaping your fashion narrative. Step into our world of personalized tailoring, and let your style shine with confidence at Tailor-trends.
        </p >

        </div>

        </div>
        <div className="service">

            <h1>Service</h1>
            <div className="service-block">
                <img src="./images/hor-formal.jpg" data-aos="fade-up" data-aos-duration="1000" alt="formaldress"></img>
                <p data-aos="fade-left" data-aos-duration="1000">
                Discover refined elegance with our collection of exquisite formal dresses at Tailor-trends. Meticulously designed to make you stand out at any occasion, each dress is a masterpiece of grace and sophistication. From classic silhouettes to modern cuts, we cater to diverse preferences, ensuring you find the perfect dress to elevate your style. Impeccable craftsmanship and attention to detail guarantee a dress that captivates with its beauty. Our personalized consultations ensure each dress is tailored to flatter your individuality. Whether it's a gala, cocktail party, or a black-tie event, our formal dresses make you the epitome of elegance. 
                </p>
                </div>   
                <div className="service-block">
                <img src="./images/hor-weeding.jpg" data-aos="fade-up" data-aos-duration="1000" alt="weedingdress"></img>
                <p data-aos="fade-left" data-aos-duration="1000">
                At Tailor-trends, we specialize in crafting exquisite wedding attire that embodies love and eternal elegance. With a passion for creativity and an unwavering pursuit of perfection, our tailor-made gowns and suits are personalized to reflect your unique love story. From intricate lacework to hand-sewn embellishments, we leave no detail untouched. Our fitting sessions promise a flawless fit, ensuring you walk down the aisle with confidence and grace. Let us be part of your wedding journey, unveiling eternal elegance through our bespoke bridal attire.
                </p >
                </div>   
                <div className="service-block">
                <img src="./images/hor-uniform.jpg" data-aos="fade-up" data-aos-duration="1000" alt="uniform"></img>
                <p data-aos="fade-left" data-aos-duration="1000">
                Experience seamless professionalism with our expert uniform tailoring services. From school uniforms to corporate attire, we craft personalized garments that embody unity and pride. Choose from a range of fabric options and styles to match your organization's unique identity. Our attention to detail ensures impeccable fits for every individual. Let us dress your team with confidence and elevate your brand's image with our tailored uniforms.
                </p>
                </div>   
                <div className="service-block">
                <img src="./images/hor-coat.jpg" data-aos="fade-up" data-aos-duration="1000" alt="coat"></img>
                <p data-aos="fade-left" data-aos-duration="1000">
                Discover timeless sophistication with our exquisite coat suit collection at Tailor-trends. Meticulously crafted by skilled tailors, each coat suit exudes refinement and class. Versatile in style, they are perfect for formal events, business occasions, or special celebrations. We use only the finest fabrics, ensuring lasting appeal and a flawless fit. Personalized consultations allow us to tailor the coat suit to complement your unique personality and physique. Whether it's your wedding day or a momentous event, our coat suits make a statement and leave a lasting impression.
                </p>
                </div>   
                <div className="service-block">
                <img src="./images/hor-tshirt.jpg" data-aos="fade-up" data-aos-duration="1000" alt="t-shirt"></img>
                <p data-aos="fade-left" data-aos-duration="1000">
                At Tailor-trends, we take pride in offering custom-designed t-shirts that reflect your individuality and personal style. Our tailor-made t-shirts are crafted with care, ensuring a perfect fit and exceptional comfort. Whether you desire a classic look or a contemporary design, our skilled team can bring your vision to life. We use premium quality materials to ensure durability and long-lasting appeal. Let us be your partner in creating t-shirts that make a statement and showcase your unique personality. Embrace your distinct style with our custom t-shirts.
                </p>  
                           
        </div>
                </div>   
              
        <div className="steps">
            <h1>Steps involved</h1>
           <div className="step" data-aos="fade-right" data-aos-duration="1000">
               <h3>Step 1 : Online Booking</h3>
               <p>You book an order through booking form on our website or by simply giving us a call on 9876543210 or 9876567873.</p>
           </div>
           <div className="step" data-aos="fade-left" data-aos-duration="1000">
               <h3>Step 2 : Pickup / Drop-off</h3>
                <p>Once you book your order with us, tailor from our team visits your given address for  measurements and  Pick Up of your clothes/garments. Pick up services will be scheduled according to your availability. we charge some amounts based on your location.to avoid this you can drop-off your cloths/garments in our shop </p>
           </div>
           <div className="step" data-aos="fade-right" data-aos-duration="1000">
               <h3>Step 3 : Stitching </h3>
                <p>Our tailors work hard to meet our beloved customer expectations. Every single stitching is performed with utmost sincerity under super strict supervision</p>
           </div>
           <div className="step" data-aos="fade-left" data-aos-duration="1000">
               <h3>Step 4 : Pickup / Delivery</h3>
                <p>Once an order is ready,We Delivery the cloths/garments at the given address. we charge some amounts based on your location.to avoid this you can pickup your cloths/garmentsin our shop</p>
           </div>
        </div>

        </div>
    )
}