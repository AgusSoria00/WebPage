const withImages = require('next-images');

module.exports = withImages({
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Aquí puedes personalizar la configuración de 'webpack' según tus necesidades

    // Por ejemplo, si deseas agregar un plugin de 'webpack':
    config.plugins.push(new MyWebpackPlugin());

    // O si deseas modificar las reglas de 'webpack':
    config.module.rules.push({
      test: /\.my-custom-extension$/,
      use: 'my-custom-loader',
    });

    return config;
  },
});