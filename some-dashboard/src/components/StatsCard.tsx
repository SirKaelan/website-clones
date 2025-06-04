import { Card, CardHeader, CardContent } from "./ui/card";

export const StatsCard = () => {
  return (
    <Card className="flex flex-col gap-20">
      <CardHeader className="flex justify-between">
        <div>Icon container</div>
        <div>Stat data</div>
      </CardHeader>
      <CardContent>Content</CardContent>
    </Card>
  );
};
