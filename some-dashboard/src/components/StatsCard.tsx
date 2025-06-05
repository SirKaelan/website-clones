import { Card, CardHeader, CardContent } from "./ui/card";

export const StatsCard = () => {
  return (
    <Card className="flex flex-col gap-0 shadow-md p-4">
      <CardHeader className="flex justify-between p-0">
        {/* icon container */}
        <div className="h-16 w-16 -mt-8 flex justify-center items-center bg-pink-200 rounded-xl">
          Icon
        </div>
        {/* stat data container */}
        <div className="flex flex-col items-end">
          <span className="text-gray-500 font-thin">Bookings</span>
          <span className="text-2xl font-bold text-blue-950">281</span>
        </div>
      </CardHeader>
      <hr className="hr-fade"></hr>
      <CardContent className="p-0">
        <p className="text-gray-500 font-thin">
          <span className="text-green-500 font-bold">+55%</span> than last week
        </p>
      </CardContent>
    </Card>
  );
};
