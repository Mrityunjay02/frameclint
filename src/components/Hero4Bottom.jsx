import React from 'react';

const ProductCard = ({ 
  title, 
  description, 
  subtitle,
  titleStyle,
  subtitleStyle,
  descriptionStyle 
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '16px',
      width: 'calc(33.333% - 32px)',
      margin: '0 16px',
      maxWidth: '300px'
    }}>
      <div style={{
        width: '100%',
        textAlign: 'center',
        color: '#F4F4F4',
        fontSize: '32px',
        fontFamily: 'Jacques Francois',
        fontWeight: '400',
        textTransform: 'capitalize',
        lineHeight: '1.2',
        wordWrap: 'break-word',
        marginBottom: '20px'
      }}>
        Visit Our Products
      </div>
      <div style={{
        width: '100%',
        aspectRatio: '201/275',
        background: 'white',
        borderRadius: '20px'
      }} />
      
      <div style={titleStyle || { 
        color: '#BFBFBF', 
        fontSize: '30px', 
        fontFamily: 'Inter', 
        fontWeight: '700', 
        wordWrap: 'break-word'
      }}>
        {title}
      </div>
      
      {subtitle && (
        <div style={subtitleStyle || { 
          color: '#BFBFBF', 
          fontSize: '15px', 
          fontFamily: 'Inter', 
          fontWeight: '300',
          wordWrap: 'break-word',
          letterSpacing: '0.3px',
          marginTop: '4px',
          marginBottom: '4px'
        }}>
          {subtitle}
        </div>
      )}
      
      <div style={descriptionStyle || { 
        color: '#BFBFBF', 
        fontSize: '18px', 
        fontFamily: 'Inter', 
        fontWeight: '400',
        wordWrap: 'break-word',
        lineHeight: '1.5',
        marginTop: '8px'
      }}>
        {description}
      </div>
    </div>
  );
};

const Hero4Bottom = () => {
  const products = [
    {
      title: 'Venmo',
      subtitle: 'Singular function',
      description: 'At launch, the popular payment solution Venmo had a singular benefit to the end-user: it allowed friends to quickly split bills.'
    },
    {
      title: 'Thomson Reuters Middle-Market Funds',
      subtitle: 'Multiple primary functions',
      description: '1. Market research, events, and resources\n2. Portfolio metrics, historical pricing, and news\n3. Fund financials, dividends, and filings\n4. Investee mark to market + more',
      titleStyle: { color: '#BFBFBF', fontSize: 30, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' },
      subtitleStyle: { color: '#BFBFBF', fontSize: 15, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' },
      descriptionStyle: { color: '#BFBFBF', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', whiteSpace: 'pre-line' }
    },
    {
      title: 'InKind Space',
      subtitle: 'Hierarchical approach',
      description: 'Primarily allows patients and their network to request and/or give support. Secondarily provides non-medical tips, local resources, and curated content.',
      titleStyle: { color: '#BFBFBF', fontSize: 30, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' },
      subtitleStyle: { color: '#BFBFBF', fontSize: 15, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' },
      descriptionStyle: { color: '#BFBFBF', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }
    }
  ];

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#000000',
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '40px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            title={product.title}
            subtitle={product.subtitle}
            description={product.description}
            titleStyle={product.titleStyle}
            subtitleStyle={product.subtitleStyle}
            descriptionStyle={product.descriptionStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero4Bottom;
