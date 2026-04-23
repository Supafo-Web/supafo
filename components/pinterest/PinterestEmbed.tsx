type PinterestEmbedProps = {
   id: string;
   width?: number;
   height?: number;
};

const PinterestEmbed = ({
   id,
   width = 236,
   height = 520,
}: PinterestEmbedProps) => {
   return (
      <iframe
         src={`https://assets.pinterest.com/ext/embed.html?id=${id}`}
         width={width}
         height={height}
         frameBorder="0"
         scrolling="no"
         style={{ border: 'none', display: 'block' }}
         title="Pinterest Embed"
      />
   );
}

export default PinterestEmbed
