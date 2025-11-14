# Managing Audiences

> Learn how to add, update, retrieve, and remove contacts that you send Broadcasts to.

Managing subscribers and unsubscribers is a critical part of any email implementation. It's important to respect your users' preferences and ensure that they're receiving the right emails at the right time.

Resend Audiences allow you to group and manage your [contacts](/dashboard/audiences/contacts) in a simple and intuitive way.

<img src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-5.png?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=659d6967f842c9713480a49af65a71e6" alt="Audience" class="extraWidth" data-og-width="3024" width="3024" data-og-height="1888" height="1888" data-path="images/audiences-intro-5.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-5.png?w=280&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=51fc6e70c66594a75625242fb4b424d2 280w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-5.png?w=560&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=1068304df68e5e739a3c5ee9545aac5f 560w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-5.png?w=840&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=3e54e83da1f78e5be1347a0cf5d3be67 840w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-5.png?w=1100&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=468932ff07fe34292b27826ce05d85d3 1100w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-5.png?w=1650&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=f7adbeb7fd21b6d75e1e4e102e2f6446 1650w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-5.png?w=2500&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=6500a1d3be7f09a990f9f7460c4fca20 2500w" />

## Send emails to your Audience

Audiences were designed to be used in conjunction with [Broadcasts](https://resend.com/broadcasts). You can send a Broadcast to an Audience from the Resend dashboard or from the Broadcast API.

### From Resend's no-code editor

You can send emails to your Audience by creating a new Broadcast and selecting the Audience you want to send it to.

<img src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-2.png?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=129a471bc9b724d6a1aab09a45dd0353" alt="Send emails to your Audience" data-og-width="1290" width="1290" data-og-height="284" height="284" data-path="images/audiences-intro-2.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-2.png?w=280&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=3b9d075d46e85298092a143869495791 280w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-2.png?w=560&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=4c901c077b9dc72e9cf12f9875ae130f 560w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-2.png?w=840&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=b052baf694a234020c74a285f0fe6ff9 840w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-2.png?w=1100&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=32b0fbf87643030bb25a12455078ede0 1100w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-2.png?w=1650&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=1b23ebbe77f884e0306f3af942e96b20 1650w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-2.png?w=2500&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=c4b296f2512b696051231a18990639b8 2500w" />

You can include the Unsubscribe Footer in your Broadcasts, which will be automatically replaced with the correct link for each contact.

### From the Broadcast API

You can also use our [Broadcast API](/api-reference/broadcasts/create-broadcast) to create and send a Broadcast to your Audience.

### How to customize the unsubscribe link in my Broadcast?

Resend generates a unique link for each recipient and each Broadcast. You can use `{{{RESEND_UNSUBSCRIBE_URL}}}` as the link target.

<img src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-3.png?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=4b37fb9c380e19ca0b53b80a3c925c8f" alt="Unsubscribe Link" data-og-width="712" width="712" data-og-height="214" height="214" data-path="images/audiences-intro-3.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-3.png?w=280&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=fed78a951b8bb70b8a41c3d25d307f82 280w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-3.png?w=560&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=f22c9a87e59c8257a3f560768be8667a 560w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-3.png?w=840&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=2d4c04e492eb5c898d23c16ebe01cb88 840w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-3.png?w=1100&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=162ff01e28924519e3d1cc11406ad8d7 1100w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-3.png?w=1650&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=fac8ea0bf3815e00af596a64f801a70b 1650w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-3.png?w=2500&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=e9bf0b2f6dbdd3729da88871fd46770d 2500w" />

## Automatic Unsubscribes

When you send emails to your Audience, Resend will automatically handle the unsubscribe flow for you.

If a contact unsubscribes from your emails, they will be skipped when sending a future Broadcast to this same audience.

<img src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-4.png?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=83a8ef4dcdbd552e097d15ffd2b31381" alt="Automatic Unsubscribes" data-og-width="3024" width="3024" data-og-height="1888" height="1888" data-path="images/audiences-intro-4.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-4.png?w=280&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=361343812d569b913204e805d831a636 280w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-4.png?w=560&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=7b8270aa0b6f54324aa3dd5c161c9209 560w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-4.png?w=840&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=c738ab92eb92c378b50b7f999d5b0e46 840w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-4.png?w=1100&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=4c8cab3ac1b80d0638b129b8b3b6f240 1100w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-4.png?w=1650&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=f6f23aa67cc3d55d36eb90e698a7cea1 1650w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-4.png?w=2500&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=55dc62abd7a663321087dc453b575773 2500w" />

Learn more about [managing your unsubscribe list](/dashboard/audiences/managing-unsubscribe-list) or [customizing your unsubscribe page](/dashboard/settings/unsubscribe-page).

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
# Managing Contacts

> How to manage and import contacts to your audiences.

Resend has [Audiences](/dashboard/audiences/introduction) made up of Contacts. You can send [Broadcasts](/dashboard/broadcasts/introduction) to your Audiences. When adding a Contact, you can assign it an email address and first and last name to personalize your Broadcast to them.

You can add your Contacts to an Audience in three different ways: via API, CSV upload, or manually.

## 1. Adding Contacts programmatically via API

You can add contacts to an Audience programmatically. For instance, after someone makes a purchase, you can add them to your "Paying Customers" audience. Resend's SDKs have support for the [contacts](/api-reference/contacts/create-contact) endpoint.

<CodeGroup>
  ```ts Node.js theme={null}
  import { Resend } from 'resend';

  const resend = new Resend('re_xxxxxxxxx');

  resend.contacts.create({
  email: 'steve.wozniak@gmail.com',
  firstName: 'Steve',
  lastName: 'Wozniak',
  unsubscribed: false,
  audienceId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
  });

  ```

  ```php PHP theme={null}
  $resend = Resend::client('re_xxxxxxxxx');

  $resend->contacts->create(
    audienceId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
    parameters: [
      'email' => 'steve.wozniak@gmail.com',
      'first_name' => 'Steve',
      'last_name' => 'Wozniak',
      'unsubscribed' => false
    ]
  );
  ```

  ```python Python theme={null}
  import resend

  resend.api_key = "re_xxxxxxxxx"

  params: resend.Contacts.CreateParams = {
    "email": "steve.wozniak@gmail.com",
    "first_name": "Steve",
    "last_name": "Wozniak",
    "unsubscribed": False,
    "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  }

  resend.Contacts.create(params)
  ```

  ```ruby Ruby theme={null}
  require "resend"

  Resend.api_key = "re_xxxxxxxxx"

  params = {
    "email": "steve.wozniak@gmail.com",
    "first_name": "Steve",
    "last_name": "Wozniak",
    "unsubscribed": false,
    "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  }

  Resend::Contacts.create(params)
  ```

  ```go Go theme={null}
  import 	"github.com/resend/resend-go/v2"

  client := resend.NewClient("re_xxxxxxxxx")

  params := &resend.CreateContactRequest{
    Email:        "steve.wozniak@gmail.com",
    FirstName:    "Steve",
    LastName:     "Wozniak",
    Unsubscribed: false,
    AudienceId:   "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  }

  contact, err := client.Contacts.Create(params)
  ```

  ```rust Rust theme={null}
  use resend_rs::{types::ContactData, Resend, Result};

  #[tokio::main]
  async fn main() -> Result<()> {
    let resend = Resend::new("re_xxxxxxxxx");

    let contact = ContactData::new("steve.wozniak@gmail.com")
      .with_first_name("Steve")
      .with_last_name("Wozniak")
      .with_unsubscribed(false);

    let _contact = resend
      .contacts
      .create("78261eea-8f8b-4381-83c6-79fa7120f1cf", contact)
      .await?;

    Ok(())
  }
  ```

  ```java Java theme={null}
  import com.resend.*;

  public class Main {
      public static void main(String[] args) {
          Resend resend = new Resend("re_xxxxxxxxx");

          CreateContactOptions params = CreateContactOptions.builder()
                  .email("steve.wozniak@gmail.com")
                  .firstName("Steve")
                  .lastName("Wozniak")
                  .unsubscribed(false)
                  .audienceId("78261eea-8f8b-4381-83c6-79fa7120f1cf")
                  .build();

          CreateContactResponseSuccess data = resend.contacts().create(params);
      }
  }
  ```

  ```bash cURL theme={null}
  curl -X POST 'https://api.resend.com/audiences/78261eea-8f8b-4381-83c6-79fa7120f1cf/contacts' \
       -H 'Authorization: Bearer re_xxxxxxxxx' \
       -H 'Content-Type: application/json' \
       -d $'{
    "email": "steve.wozniak@gmail.com",
    "first_name": "Steve",
    "last_name": "Wozniak",
    "unsubscribed": false
  }'
  ```
</CodeGroup>

## 2. Adding Contacts by uploading a .csv

<Steps>
  <Step title="Go to Audiences">
    Go to the [Audiences](https://resend.com/audiences) page, and select **Add Contacts**.

        <img src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=cf6ffd1665ab8bf235ba046519e50fe0" alt="Adding Contacts" data-og-width="3024" width="3024" data-og-height="1804" height="1804" data-path="images/audiences-intro-6.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=280&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=ade2e714c210127aa6ab0f9a8bfba48d 280w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=560&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=2249cf8965edf78e7d84f9c2babb8ce6 560w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=840&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=9a11dc6bc68f80b0cecb700d6b8661b9 840w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=1100&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=04e6b7d838a7e446b5cd82959c48d77e 1100w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=1650&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=8e4e711e8646a58ca482cc3a722c387b 1650w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=2500&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=d4a5dc0b20602aa375278014eac40a26 2500w" />
  </Step>

  <Step title="Select Import">
    Select **Import CSV**.
  </Step>

  <Step title="Upload CSV">
    Upload your CSV file from your computer.

        <img src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=cf6ffd1665ab8bf235ba046519e50fe0" alt="Adding Contacts" data-og-width="3024" width="3024" data-og-height="1804" height="1804" data-path="images/audiences-intro-6.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=280&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=ade2e714c210127aa6ab0f9a8bfba48d 280w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=560&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=2249cf8965edf78e7d84f9c2babb8ce6 560w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=840&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=9a11dc6bc68f80b0cecb700d6b8661b9 840w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=1100&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=04e6b7d838a7e446b5cd82959c48d77e 1100w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=1650&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=8e4e711e8646a58ca482cc3a722c387b 1650w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=2500&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=d4a5dc0b20602aa375278014eac40a26 2500w" />
  </Step>

  <Step title="Map Fields">
    After uploading your CSV file, you're able to map the fields you want to use. Currently, the supported mapping fields are `email`, `first_name`, `last_name`, and `unsubscribed`.

    <img src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-1.png?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=cc19e1239528d227ed7ba36742758d72" alt="Import Contacts via CSV" class="extraWidth" data-og-width="3024" width="3024" data-og-height="1888" height="1888" data-path="images/audiences-intro-1.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-1.png?w=280&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=b9f3d45d5252150e5ff48337c4d0ff5a 280w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-1.png?w=560&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=23d469f6708afce9fe1443b8ce851127 560w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-1.png?w=840&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=bebae4269d79261fe8fb129dd7577808 840w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-1.png?w=1100&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=b2011a32f337874e3db55113468125c9 1100w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-1.png?w=1650&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=8087f938bb788b524888c21ea613642f 1650w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-1.png?w=2500&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=cdc3d1ee8bbb80a5ec7bbf9b6642e963 2500w" />

    Finally, select **Continue**, review the contacts, and finish the upload.
  </Step>
</Steps>

## 3. Adding Contacts manually

<Steps>
  <Step title="Go to Audiences">
    Go to the [Audiences](https://resend.com/audiences) page, and select **Add Contacts**.

        <img src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=cf6ffd1665ab8bf235ba046519e50fe0" alt="Adding Contacts" data-og-width="3024" width="3024" data-og-height="1804" height="1804" data-path="images/audiences-intro-6.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=280&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=ade2e714c210127aa6ab0f9a8bfba48d 280w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=560&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=2249cf8965edf78e7d84f9c2babb8ce6 560w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=840&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=9a11dc6bc68f80b0cecb700d6b8661b9 840w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=1100&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=04e6b7d838a7e446b5cd82959c48d77e 1100w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=1650&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=8e4e711e8646a58ca482cc3a722c387b 1650w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-6.png?w=2500&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=d4a5dc0b20602aa375278014eac40a26 2500w" />
  </Step>

  <Step title="Choose Manual">
    Select **Add Manually**.
  </Step>

  <Step title="Add Contacts">
    You can then add either one, or multiple email addresses into the text field, separating multiple email addresses with commas.

        <img src="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-7.png?fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=62ffb7c1fb775136e737d5ba0a1ab881" alt="Adding Contacts Manually" data-og-width="3024" width="3024" data-og-height="1810" height="1810" data-path="images/audiences-intro-7.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-7.png?w=280&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=e110cf1e70687d4dfad8569a4d041331 280w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-7.png?w=560&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=9ef73054f94bab33dd01464f4154e4ee 560w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-7.png?w=840&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=bb89d33351b3dad5bac40d0f484d007f 840w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-7.png?w=1100&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=8a3cb6b2f948bed3f7347edd0a223652 1100w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-7.png?w=1650&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=1e6b75394a9642c7b3fd9152c967066c 1650w, https://mintcdn.com/resend/ABWmVTZIHGIFNTFD/images/audiences-intro-7.png?w=2500&fit=max&auto=format&n=ABWmVTZIHGIFNTFD&q=85&s=d6902bb110b950921ad49954fb2f9782 2500w" />
  </Step>
</Steps>
# Managing Unsubscribed Contacts

> Learn how to check and remove recipients who have unsubscribed to your marketing emails.

It's essential to update your contact list when someone unsubscribes to maintain a good sender reputation. This reduces the likelihood of your emails being marked as spam, and can also improve deliverability for any other marketing or transactional emails you send.

When a contact unsubscribes from your emails, Resend will automatically handle the unsubscribe flow for you, and they will be skipped when sending the next Broadcast to that same audience.

## Checking Unsubcribed Contacts

To see which contacts have unsubscribed, first navigate to the [Audiences page](https://resend.com/audiences). Then, select the Audience that you want to check.

Click on the **All Statuses** filter next to the search bar, then select **Unsubscribed**.

<img alt="Managing Unsubscribe List" src="https://mintcdn.com/resend/OWNnQaVDyqcGyhhN/images/manage-unsubscriptions-1.png?fit=max&auto=format&n=OWNnQaVDyqcGyhhN&q=85&s=2b93f42570fc6f25d6d835f3bf63166a" data-og-width="3024" width="3024" data-og-height="1808" height="1808" data-path="images/manage-unsubscriptions-1.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/resend/OWNnQaVDyqcGyhhN/images/manage-unsubscriptions-1.png?w=280&fit=max&auto=format&n=OWNnQaVDyqcGyhhN&q=85&s=8bb8d548b35a7c16be935954ca241c2b 280w, https://mintcdn.com/resend/OWNnQaVDyqcGyhhN/images/manage-unsubscriptions-1.png?w=560&fit=max&auto=format&n=OWNnQaVDyqcGyhhN&q=85&s=950eb41d199948516932ac8b9bbcfea5 560w, https://mintcdn.com/resend/OWNnQaVDyqcGyhhN/images/manage-unsubscriptions-1.png?w=840&fit=max&auto=format&n=OWNnQaVDyqcGyhhN&q=85&s=e52c046db3069e2685cc31588018e27b 840w, https://mintcdn.com/resend/OWNnQaVDyqcGyhhN/images/manage-unsubscriptions-1.png?w=1100&fit=max&auto=format&n=OWNnQaVDyqcGyhhN&q=85&s=c3c63a9614e393845c81d0473e6101dd 1100w, https://mintcdn.com/resend/OWNnQaVDyqcGyhhN/images/manage-unsubscriptions-1.png?w=1650&fit=max&auto=format&n=OWNnQaVDyqcGyhhN&q=85&s=ed0a2e36dafd1948565c29a25bfec4de 1650w, https://mintcdn.com/resend/OWNnQaVDyqcGyhhN/images/manage-unsubscriptions-1.png?w=2500&fit=max&auto=format&n=OWNnQaVDyqcGyhhN&q=85&s=5e9d2feda781f4eac7e96a41c3811dbe 2500w" />
