export const theme = {
  colors: {
    primary: '#6366F1', // Electric Indigo
    secondary: '#EC4899', // Hot Pink
    accent: '#14B8A6', // Teal
    warning: '#F59E0B', // Amber
    success: '#10B981', // Emerald
    
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      mesh: 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)'
    },
    
    dark: {
      primary: '#0F172A',
      secondary: '#1E293B',
      accent: '#334155'
    },
    
    light: {
      primary: '#F8FAFC',
      secondary: '#F1F5F9',
      accent: '#E2E8F0'
    }
  },
  
  animations: {
    bounce: 'bounce 2s infinite',
    float: 'float 6s ease-in-out infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    spin: 'spin 3s linear infinite',
    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    wave: 'wave 2.5s ease-in-out infinite',
    glow: 'glow 2s ease-in-out infinite alternate'
  }
};