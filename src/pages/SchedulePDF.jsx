// SchedulePDF.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica'
  },
  header: {
    marginBottom: 20,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#223F80'
  },
  dayTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#223F80'
  },
  session: {
    marginBottom: 15,
    paddingLeft: 10,
    borderLeft: '3px solid #2783BC'
  },
  time: {
    fontSize: 12,
    color: '#F58432',
    marginBottom: 5
  },
  sessionTitle: {
    fontSize: 14,
    marginBottom: 5,
    color: '#223F80'
  },
  detailItem: {
    fontSize: 10,
    marginBottom: 3
  }
});

const SchedulePDF = ({ events }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>TOPS-2025 Event Schedule </Text>
        <Text>May 23-25, 2025 | Hotel G Ramayana, Kathmandu</Text>
      </View>

      {events.map((event, index) => (
        <View key={event.id} style={{ marginBottom: 30 }}>
          <Text style={styles.dayTitle}>Day {index + 1}: {event.title}</Text>
          <Text>{event.date} ({event.nepaliDate})</Text>

          {event.sessions.map((session, sessionIndex) => (
            <View key={sessionIndex} style={styles.session}>
              <Text style={styles.time}>{session.time} </Text>
              <Text style={styles.sessionTitle}>{session.title}</Text>
              {session.details.map((detail, detailIndex) => (
                <Text key={detailIndex} style={styles.detailItem}>• {detail}</Text>
              ))}
              {session.speaker && (
                <Text style={styles.detailItem}>Speaker: {session.speaker}</Text>
              )}
            </View>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

export default SchedulePDF;