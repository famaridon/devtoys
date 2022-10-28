import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public readonly menu: Category[] = [
    {
      label: 'Encoder / Decoder',
      icon: 'EncodersDecoders.svg',
      menuItems: [
        {
          path: 'encoders-decoders/base64',
          icon: 'Base64EncoderDecoder.svg',
          label: 'Base64',
        },
        {
          path: 'encoders-decoders/image-base64',
          icon: 'Base64EncoderDecoder.svg',
          label: 'Base64 Image',
        },
        {
          path: 'encoders-decoders/uri',
          icon: 'UrlEncoderDecoder.svg',
          label: 'URL',
        },
        {
          path: 'encoders-decoders/html',
          icon: 'HtmlEncoderDecoder.svg',
          label: 'HTML',
        },
        {
          path: 'encoders-decoders/jwt',
          icon: 'JwtDecoder.svg',
          label: 'JwT',
        },
      ],
    },
    {
      label: 'Generators',
      icon: 'Generators.svg',
      menuItems: [
        {
          path: 'generators/uuid',
          icon: 'UuidGenerator.svg',
          label: 'UUID',
        },
        {
          path: 'generators/lorem-ipsum',
          icon: 'LoremIpsumGenerator.svg',
          label: 'Lorem Ipsum',
        },
      ],
    },
    {
      label: 'Formatters',
      icon: 'Formatters.svg',
      menuItems: [
        {
          path: 'formatters/json',
          icon: 'JsonFormatter.svg',
          label: 'JSON',
        },
      ],
    },
    {
      label: 'Graphic',
      icon: 'Graphic.svg',
      menuItems: [
        {
          path: 'graphic/color-picker',
          icon: 'ColorPicker.svg',
          label: 'Color Picker',
        },
      ],
    },
  ];

  public constructor() {}
}

export interface Category {
  label: string;
  icon: string;
  menuItems: MenuItem[];
}

export interface MenuItem {
  path: string;
  label: string;
  icon: string;
}
