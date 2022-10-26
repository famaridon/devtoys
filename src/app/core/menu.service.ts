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
          path: 'base64',
          icon: 'Base64EncoderDecoder.svg',
          label: 'Base64',
        },
        {
          path: 'imageBase64',
          icon: 'Base64EncoderDecoder.svg',
          label: 'Base64 Image',
        },
        {
          path: 'uri',
          icon: 'UrlEncoderDecoder.svg',
          label: 'URL',
        },
        {
          path: 'html',
          icon: 'HtmlEncoderDecoder.svg',
          label: 'HTML',
        },
        {
          path: 'jwt',
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
          path: 'uuid',
          icon: 'UuidGenerator.svg',
          label: 'UUID',
        },
        {
          path: 'lorem-ipsum',
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
          path: 'json-formatter',
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
          path: 'color-picker',
          icon: 'ColorPicker.svg',
          label: 'Color Picker',
        },
      ],
    },
  ];

  constructor() {}
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
