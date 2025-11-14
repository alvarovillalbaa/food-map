# Managing Broadcasts

> Send marketing emails efficiently without code.

Broadcasts allow you to send email blasts to your customers using a no-code editor on Resend, or from our [Broadcast API](/api-reference/broadcasts/create-broadcast).

You can use this to send email blasts such as:

* Newsletters
* Product Launches
* Investor Updates
* Promotions
* Changelogs

## Sending a Broadcast from Resend

Our Broadcasts feature was made to enable your entire team to send email campaigns without having to ask for help from developers.

### No-Code Editor

<video autoPlay muted loop playsinline className="w-full aspect-video" src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/broadcasts-intro-1.mp4?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=3110c61ed7f55bd11b8b554317a26013" data-path="images/broadcasts-intro-1.mp4" />

### Markdown Support

You can also write your emails using Markdown. This works with headings, lists, italic, bold, links, and quotes.

You can easily copy and paste content from applications like Notion, Google Docs, iA Writter and many others maintaining formatting consistency.

<video autoPlay muted loop src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/broadcasts-intro-2.mp4?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=f9eff19108e26080f5e2a6c001747125" data-path="images/broadcasts-intro-2.mp4" />

### Custom Styling

You can customize the look and feel of your email by changing **global styles** such as the background color, link color, and container size, allowing you to create emails aligned with your brand identity.

To do this, click on **Styles** at the top left of the Broadcast editor. You can edit specific images or lines of texts by selecting or highlighting them prior to clicking on **Styles**.

<video autoPlay muted loop playsinline className="w-full aspect-video" src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/broadcasts-intro-3.mp4?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=ae6eacc8f633924b0585c78745fb4b29" data-path="images/broadcasts-intro-3.mp4" />

You can also edit individual styles for each component, including the font size, font weight, and text alignment. You can also set custom properties for each component, such as image alt, button links, and social links,

<video autoPlay muted loop playsinline className="w-full aspect-video" src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/broadcasts-intro-4.mp4?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=db5dfc8e83576ff410ca6be6950af9cc" data-path="images/broadcasts-intro-4.mp4" />

### Personalize your content

When creating broadcasts, you can include dynamic audience data to personalize the email content.

* `{{{FIRST_NAME|fallback}}}`
* `{{{LAST_NAME|fallback}}}`
* `{{{EMAIL}}}`
* `{{{RESEND_UNSUBSCRIBE_URL}}}`

When you include the `{{{RESEND_UNSUBSCRIBE_URL}}}` placeholder in the call, Resend includes an unsubscribe link in the email to automatically handle unsubscribe requests.

<Note>
  Learn how to create a [custom Unsubscribe
  Page](/dashboard/settings/unsubscribe-page).
</Note>

### Testing & Sending

Once you're finished writing your email, you can preview it in your personal inbox or send it to your team for feedback.

To do this, click on **Test Email** on the top right of your screen. Enter in the email address you'd like to send your email to, and then click on **Send Test Email** to complete.

Once you're ready to send your email to your Audience, click on **Send**, and slide to confirm.

<video autoPlay muted loop playsinline className="w-full aspect-video" src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/broadcasts-intro-5.mp4?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=63d941de662cc292556934834bc81d4c" data-path="images/broadcasts-intro-5.mp4" />

**Note**: Test emails do not include any custom Reply-To address that may have been configured. This behavior is limited to test mode and does not affect actual email sends.

## Sending a Broadcast from the Broadcast API

We also offer the option to send your Broadcasts from our [Broadcast API](/api-reference/broadcasts/create-broadcast).

The Broadcast API offers 6 endpoints for programmatically creating, updating, and sending broadcasts.

## Understand broadcast statuses

Here are all the statuses that can be associated with a broadcast:

* `draft` - The broadcast is a draft (note: if a broadcast is scheduled, it will be in the `draft` status until the scheduled time).
* `sent` - The broadcast was sent.
* `queued` - The broadcast is queued for delivery.

## Export your data

Admins can download your data in CSV format for the following resources:

* Emails
* Broadcasts
* Contacts
* Domains
* Logs
* API keys

<Info>Currently, exports are limited to admin users of your team.</Info>

To start, apply filters to your data and click on the "Export" button. Confirm your filters before exporting your data.

<video autoPlay muted loop playsinline className="w-full aspect-video" src="https://mintcdn.com/resend/OWNnQaVDyqcGyhhN/images/exports.mp4?fit=max&auto=format&n=OWNnQaVDyqcGyhhN&q=85&s=1149ee4e83b4414e75a0ecaa92774c38" data-path="images/exports.mp4" />

If your exported data includes 1,000 items or less, the export will download immediately. For larger exports, you'll receive an email with a link to download your data.

All admins on your team can securely access the export for 7 days. Unavailable exports are marked as "Expired."

<Note>
  All exports your team creates are listed in the
  [Exports](https://resend.com/exports) page under **Settings** > **Team** >
  **Exports**. Select any export to view its details page. All members of your
  team can view your exports, but only admins can download the data.
</Note>
# Performance Tracking

> Track your Broadcasts email performance in real-time

Once your broadcast is sent, you can track its performance right away. The insights you can view are emails delivered, unsubscribed, click rate, and open rate.

You can view these insights by clicking on [Broadcast](https://resend.com/broadcasts) in the left column, and then clicking on the Broadcast that you want to view.

<video autoPlay muted loop playsinline className="w-full aspect-video" src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/broadcasts-performance-tracking-1.mp4?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=772b0573205e3bd1d3dee7fabbbcfef1" data-path="images/broadcasts-performance-tracking-1.mp4" />

Please note, at times, open rates can be inaccurate for a number of reasons due to the way inbox providers handle incoming emails. You can [read more about this here.](https://resend.com/docs/knowledge-base/why-are-my-open-rates-not-accurate)
