import { Injectable, Type } from '@angular/core';
import { GoldPackageAdComponent } from '../gold-package-ad/gold-package-ad.component';
import { BasicAdComponent } from '../basic-ad/basic-ad.component';

@Injectable({ providedIn: 'root' })
export class AdService {
  getAds() {
    return [
      {
        component: BasicAdComponent,
        inputs: { name: 'xyz restaurant', bio: 'eat tasty' },
      },
      {
        component: BasicAdComponent,
        inputs: { name: 'Dr. abc', bio: 'consultation time: 4pm to 6pm' },
      },
      {
        component: GoldPackageAdComponent,
        inputs: {
          headline: 'Car for sale',
          body: 'get 50% off',
          img: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fhyundai%2Fcreta%2Fhyundai-creta.jpg%3Fv%3D92&w=640&q=75'
        },
      },
      {
        component: GoldPackageAdComponent,
        inputs: {
          headline: 'Chevrolet Corvette Stingray',
          body: 'Get now for $60,000.',
          img: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960'
        },
      },
    ] as {component: Type<any>, inputs: Record<string, unknown>}[];
  }
}
