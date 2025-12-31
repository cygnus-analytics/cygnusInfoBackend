export default ({ env }: { env: (key: string, defaultValue?: string) => string }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
          resource_type: 'auto',
        },
        actionOptions: {
          upload: {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            transformation: [],
          },
          delete: {},
        },
      },
    },
  });
  