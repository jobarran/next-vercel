

interface Props {
    children: any;
    }

export const LightLayout = ({ children }: Props) => {

  return (
    <div style={{
        backgroundColor: '#ffffff',
        color: '#404040',
        padding: '10px',
        borderRadius: '5px'
    }}>
        <h3>Light-Layout</h3>
        { children }
        
        
    </div>
  )
}
