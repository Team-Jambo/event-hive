import React from "react";
import { coll1, coll2, coll3, collegefirst } from "../../assets";
import CollegeCard from "../../components/CollegeCard";

const College = () => {
  return <div>
    <div >
      <img src={collegefirst} alt="collegefirst" className=" p-5"/>
      <h1 className="text-black text-2xl font-bold px-10">IIT Roorke</h1>
      <p className="px-10">DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.

        DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.

        DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.

        DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
    </div>

    <div className="flex flex-row font-bold p-4">
      <h1 className="text-black text-2xl">College</h1>
      <h1 className="text-[#7848f3] text-2xl">Events</h1>
    </div>
    <div>
      <div className="grid grid-cols-3 gap-5">
        <CollegeCard image={coll1}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow"
          date="Saturday, March 18, 9.30PM"
          note="ONLINE EVENT - Attend anywhere" />
        <CollegeCard image={coll2}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow"
          date="Saturday, March 18, 9.30PM"
          note="ONLINE EVENT - Attend anywhere" />
        <CollegeCard image={coll3}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow"
          date="Saturday, March 18, 9.30PM"
          note="ONLINE EVENT - Attend anywhere" />
        <CollegeCard image={coll1}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow"
          date="Saturday, March 18, 9.30PM"
          note="ONLINE EVENT - Attend anywhere" />
        <CollegeCard image={coll3}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow"
          date="Saturday, March 18, 9.30PM"
          note="ONLINE EVENT - Attend anywhere" />
        <CollegeCard image={coll2}
          name="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow"
          date="Saturday, March 18, 9.30PM"
          note="ONLINE EVENT - Attend anywhere" />
      </div>
    </div>

  </div>;
};

export default College;
