import { Link } from 'react-router-dom';
import { useAuth } from '@/components/AuthProvider';
import { ModeToggle } from '@/components/mode-toggle';
import { NotificationBell } from '@/components/NotificationBell';

interface HeaderProps {
  showBackButton?: boolean;
  className?: string;
}

export const Header = ({ showBackButton = true, className = '' }: HeaderProps) => {
  const { user } = useAuth();

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            {showBackButton && (
              <>
                <Link 
                  to="/" 
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                >
                  <span className="text-sm sm:text-lg">←</span> 
                  <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Home</span>
                </Link>
                <span className="text-muted-foreground hidden sm:inline">•</span>
              </>
            )}
            <Link 
              to="/news" 
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span className="hidden sm:inline">Job News</span>
              <span className="sm:hidden">News</span>
            </Link>
            <span className="text-muted-foreground hidden sm:inline">•</span>
            <Link 
              to="/linkedin" 
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span className="hidden sm:inline">LinkedIn Analyzer</span>
              <span className="sm:hidden">LinkedIn</span>
            </Link>
            <span className="text-muted-foreground hidden sm:inline">•</span>
            <Link 
              to="/insights" 
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span className="hidden sm:inline">Career Insights</span>
              <span className="sm:hidden">Insights</span>
            </Link>
            {user && (
              <>
                <span className="text-muted-foreground hidden sm:inline">•</span>
                <Link 
                  to="/profile" 
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <span className="hidden sm:inline">Profile</span>
                  <span className="sm:hidden">Profile</span>
                </Link>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <NotificationBell />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
