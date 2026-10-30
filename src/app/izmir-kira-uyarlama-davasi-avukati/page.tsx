import { ServicePage, serviceMetadata } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

const service = getService("izmir-kira-uyarlama-davasi-avukati");
export const metadata = serviceMetadata(service);

export default function Page() {
    return <ServicePage service={service} />;
}
