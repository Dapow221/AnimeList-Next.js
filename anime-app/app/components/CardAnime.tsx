import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CardAnime({ data }) {
  const MAX_SYNOPSIS_LENGTH = 70; 

  const truncatedSynopsis =
    data.synopsis.length > MAX_SYNOPSIS_LENGTH
      ? data.synopsis.substring(0, MAX_SYNOPSIS_LENGTH) + "..."
      : data.synopsis;

  return (
    <Card className="py-6">
    <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={data.images.webp.image_url}
          width={260}
        />
      </CardBody>
      <div>
        <CardHeader className="pb-0 pt-2">
          <h4 className="font-bold text-large">{data.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 max-w-xs">
          <p className="text-default-500 overflow-hidden overflow-ellipsis">
            {truncatedSynopsis}
          </p>
        </CardBody>
      </div>
    </Card>
  );
}
