import { Container } from '@mui/material';

interface PageContainerProps {
    children: React.ReactNode;
}   

const styles = {
    container: 'flex flex-col items-center justify-center min-h-screen py-2',
}

export default function PageContainer({ children } : PageContainerProps) {
    return <Container className={styles.container} >
        { children }
    </Container>
}