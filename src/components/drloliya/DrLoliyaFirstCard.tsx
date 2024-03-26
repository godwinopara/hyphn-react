import img1 from "../../images/dr-loliya1.png";
import Card from "../ui/Card";

export default function DrLoliyaFirstCard() {
  return (
    <Card img={img1}>
      <p className="max-w-3xl mx-auto">
        Dr. Idoniboye is a highly accomplished medical professional,
        board-certified in Family Practice and Obesity Medicine. Her journey in
        the medical field has been marked by a commitment to excellence and a
        deep passion for promoting women's health and combating obesity.{" "}
      </p>
      <br />
      <p>
        She completed her residency at Niagara Falls Memorial in NY, and pursued
        further specialization through a fellowship in women's health at Cornell
        Weill/Lincoln Hospital NY, . This comprehensive training equipped her
        with the skills and knowledge needed to address a wide range of medical
        concerns, with a particular focus on the unique healthcare needs of
        women
      </p>
      <br />
      <p>
        Dr. Idoniboye's dedication to women's health and obesity medicine stems
        from her belief in the interconnectedness of the two.
      </p>
    </Card>
  );
}
