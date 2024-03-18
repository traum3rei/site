/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack: (config, options) => {
        config.module.rules.push({
            
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      
        });
        return config;
    }
}



export default nextConfig;
