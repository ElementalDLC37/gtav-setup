import "./style.css"
import { useState, useEffect } from 'react';

export function Apresentation() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, [isVisible]);

  return (
    <div className="apresentation">
        aaaa
    </div>
  )
}