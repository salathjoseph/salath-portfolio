import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function CalendarView({ events, eventClick, select, eventDrop }: any) {
  return (
    <div className="glass-panel" style={{ padding: '24px', background: 'rgba(30, 41, 59, 0.6)' }}>
      <style>{`
        /* FullCalendar Custom Glassmorphism Theme */
        .fc {
          --fc-border-color: var(--border-color);
          --fc-button-text-color: var(--text-primary);
          --fc-button-bg-color: var(--surface-color);
          --fc-button-border-color: var(--border-color);
          --fc-button-hover-bg-color: var(--surface-color-hover);
          --fc-button-hover-border-color: var(--border-color);
          --fc-button-active-bg-color: var(--accent-blue);
          --fc-button-active-border-color: var(--accent-blue);
          --fc-event-bg-color: var(--accent-purple);
          --fc-event-border-color: transparent;
          --fc-page-bg-color: transparent;
          --fc-neutral-bg-color: rgba(255, 255, 255, 0.05);
          --fc-list-event-hover-bg-color: rgba(255, 255, 255, 0.05);
          --fc-today-bg-color: rgba(59, 130, 246, 0.1);
          color: var(--text-primary);
        }
        
        .fc .fc-toolbar-title {
          font-size: 1.4rem;
          font-weight: 700;
        }
        
        .fc .fc-button {
          padding: 8px 16px;
          border-radius: 8px;
          text-transform: capitalize;
          font-family: var(--font-main);
          font-weight: 500;
        }
        
        .fc .fc-button-primary:not(:disabled):active, 
        .fc .fc-button-primary:not(:disabled).fc-button-active {
          background-color: var(--accent-blue);
          border-color: var(--accent-blue);
        }

        .fc .fc-daygrid-day-number {
          padding: 8px;
          color: var(--text-secondary);
        }

        .fc-theme-standard td, .fc-theme-standard th {
          border-color: var(--glass-border);
        }
        
        .fc-theme-standard .fc-scrollgrid {
          border-color: var(--glass-border);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .fc-h-event .fc-event-main {
          color: #fff;
          font-weight: 500;
          padding: 2px 4px;
        }
      `}</style>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        editable={true}
        selectable={true}
        events={events}
        eventClick={eventClick}
        select={select}
        eventDrop={eventDrop}
        height="700px"
        eventContent={(arg) => {
          const { baseColor, bgColor } = arg.event.extendedProps;
          
          return (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 8px',
              backgroundColor: bgColor || 'rgba(148, 163, 184, 0.15)',
              color: baseColor || '#94a3b8',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 600,
              width: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              border: 'none',
              boxShadow: 'none'
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: baseColor || '#94a3b8',
                flexShrink: 0
              }} />
              {arg.timeText && <span>{arg.timeText}</span>}
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{arg.event.title}</span>
            </div>
          );
        }}
      />
    </div>
  );
}
