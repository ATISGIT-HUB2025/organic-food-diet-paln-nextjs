import React from "react";
import Image from "next/image";

const MealPlanInfo = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-8">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Is the Indian Fusion Veg Meal Plan for you?
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          This is the right meal plan for you if you are Vegetarian and
          accustomed to Indian Flavours and not being able to commit to other
          meal plans due to lack of flavour! Improve your health and reach your
          fitness goals by building your custom meal plan to fit your needs!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Tabby Box */}
          <div className="flex items-center bg-white rounded-3xl p-6 shadow-md">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-xl font-bold mr-4">
              <Image
                src="/img/meal-plan-details/7.svg"
                alt="Biodegradable"
                width={40}
                height={40}
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-800">
                Buy Now, Pay Later!
              </h3>
              <p className="text-sm text-gray-600">
                Subscribe to a 4 week plan and split payments into 4 weeks with
                tabby! Get in touch with our team to avail this service!
              </p>
            </div>
          </div>

          {/* Biodegradable Box */}
          <div className="flex items-center bg-green-600 rounded-3xl p-6 shadow-md text-white">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full mr-4">
              <Image
                src="/img/meal-plan-details/6.svg"
                alt="Biodegradable"
                width={40}
                height={40}
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">Biodegradable Packaging</h3>
              <p className="text-sm">
                We don’t just take care of you, we also take care of the planet!
                All of our packaging is eco-friendly!
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* No Meat Box */}
          <div className="bg-orange-100 rounded-3xl flex items-center justify-between p-6 shadow-md">
            <div className="max-w-[60%]">
              <h3 className="text-xl font-bold text-orange-700 mb-2">
                No Meat, No Guilt!
              </h3>
              <p className="text-sm text-orange-900">
                Embark on a rich journey of flavours with our Indian Fusion
                Vegetarian Meal Plan! We not only making eating healthy easy,
                but we also bring in the best local flavours from India to amaze
                your taste buds! Sign up now and embrace your health!
              </p>
            </div>
            <Image
              src="/img/meal-plan-details/8.webp"
              alt="Veg Pizza"
              width={120}
              height={120}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Best Meal Plan Box */}
          <div className="bg-blue-100 rounded-3xl flex items-center justify-between p-6 shadow-md">
            <div className="max-w-[60%]">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Best Indian Meal Plan!
              </h3>
              <p className="text-sm text-blue-900">
                We have built this meal plan, specifically for you! Go ahead and
                build this meal plan as per your needs and nutritional
                requirements to achieve your fitness goals! Just stick to the
                plan, and we’ll take care of the rest, we promise! Isn’t this
                amazing?
              </p>
            </div>
            <Image
              src="/img/meal-plan-details/9.webp"
              alt="VMeals Bag"
              width={120}
              height={120}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlanInfo;
