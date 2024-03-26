import img from "../../images/dr-loliya2.png";
import Card from "../ui/Card";

export default function DrLoliyaSecondCard() {
  return (
    <Card img={img} reverse>
      <p>
        She firmly believes that addressing women's health issues is integral to
        promoting overall well-being and fostering healthier life choices,
        especially in the context of obesity. Her personal journey has played a
        significant role in shaping her professional outlook.
      </p>
      <br />
      <p>
        Dr. Idoniboye has faced her own challenges with weight management and
        wellness, allowing her to deeply empathize with the struggles her
        patients may encounter. This personal connection enables her to approach
        patient care with a unique understanding and compassion.
      </p>
    </Card>
  );
}
