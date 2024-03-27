import React from "react";

type Props = {};

const data = [
  {
    id: 1,
    count: "01",
    title: "Lax Skin",
    desc: "Lip filler isn’t just all about adding volume – the benefits of lip augmentation also include improving the lips’ shape, a look of hydration, balance and symmetry. Lips’ shapes can be modified to make certain features more pronounced, and one of our skillful injectors can help you create the lip shape you have always wanted. Lip filler can provide you with a fuller upper or lower lip, accentuate or soften the peaks of the cupid’s bow, correct uneven lips, line the outside border of the lips for greater definition, fix drooping corners and so much more!",
  },
  {
    id: 2,
    count: "02",
    title: "Restored Volume",
    desc: "Restoring lost volume to more mature lips is also possible by using lip filler. Lips tend to be one of the first areas to lose their youthful fullness as skin loses elasticity and moisture. Through the aging process, the body naturally produces less hyaluronic acid (which binds to moisture), causing lips to gradually look more deflated and less hydrated. This can create a dry, thin, “smokers line”-type appearance. Filler can help to correct this by restoring the volume that was lost and filling in vertical lip lines surrounding the lips, returning lips to a more youthful, hydrated state.",
  },
  {
    id: 1,
    count: "03",
    title: "Improved Facial Balance",
    desc: "Our trained lip filler providers can actually give an overall more cohesive look to the face by creating a more flattering lip shape and proportion. This is where facial balance comes into play; and why your injector will pay special attention to your lips’ relation to your other features, such as the chin, jawline, nose, eyes, and shape of the face. It’s not just about making your lips look beautiful; it is also about how changes made to your lips will enhance or detract from other features of your face. One of the best benefits of lip injections? The added lipstick real estate!",
  },
];

export const Offers = (props: Props) => {
  return (
    <section className="bg-white my-10">
      <div className="w-5/6 mx-auto flex flex-col gap-8 text-dark3">
        <h1 className="text-[32px] text-center max-w-lg mx-auto font-medium">
          What Our Providers Can Offer with Lip Fillers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl px-2 py-10 flex flex-col gap-5 text-dark3"
            >
              <p className="text-2xl font-medium">{item.count}</p>
              <h1 className="text-[32px] font-medium">{item.title}</h1>
              <span className="text-base max-w-[332px]">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
