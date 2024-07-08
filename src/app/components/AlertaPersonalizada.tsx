import React from 'react';

interface AlertaPersonalizadaProps {
  mensaje: string;
  visible: boolean;
  onClose: () => void;
}

const AlertaPersonalizada: React.FC<AlertaPersonalizadaProps> = ({ mensaje, visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <p>{mensaje}</p>
        <div className="flex justify-center mt-4">

        <button
          onClick={onClose}
          className="bg-[#F95901]  text-white px-4 py-2 rounded"
        >
          OK
        </button>
        </div>
      </div>
    </div>
  );
};

export default AlertaPersonalizada;